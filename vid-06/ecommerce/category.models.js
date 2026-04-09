import mongoose from "mongoose";
import { type } from "node:os";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
