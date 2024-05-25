import { Router } from "express";
import orderModel from "../models/order.model.js";

export const orderRouter = Router();

orderRouter.get("/", async (req, res) => {
  try {
    const order = await orderModel.find();

    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error, `error`);
  }
});

orderRouter.post("/order", async (req, res) => {
  const { name, size, price, quantity, date } = req.body;

  try {
    const result = await orderModel.insertMany(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error, `error`);
  }
});

orderRouter.get("/order", async (req, res) => {
  try {
    const orders = await orderModel.aggregate([
      { $match: { size: "medium" } },
      { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } },
    ]);
    res.status(200).send(orders);
  } catch (error) {
    console.error("Error during aggregation:", error);
    res.status(400).send({
      message: "An error occurred while processing the request",
      error: error.message,
    });
  }
});

orderRouter.post("/orderfilter", async (req, res) => {
  try {
    const orders = await orderModel.aggregate([
      { $match: { size: "medium" } },
      { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } },
      { $sort: { totalQuantity: -1 } },
      { $group: { _id: 1, orders: { $push: "$$ROOT" } } },
      { $project: { _id: 0, orders: "$orders" } },
      { $merge: { into: "reports" } },
    ]);

    res.status(200).send(orders);
  } catch (error) {
    console.error("Error during aggregation:", error);
    res.status(400).send({
      message: "An error occurred while processing the request",
      error: error.message,
    });
  }
});
