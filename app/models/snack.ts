import mongoose from "mongoose";

export interface SnackData {
  flavour: "sweet" | "salty";
}

const flavourEnums: SnackData["flavour"][] = ["sweet", "salty"];

const schema = new mongoose.Schema<SnackData>({
  flavour: {
    type: String,
    required: true,
    enum: flavourEnums,
  },
});

const modelName = "snack";

let Snack: mongoose.Model<SnackData>;

// Remove the previous version of the model that is already registered. While
// inefficient, this ensures that any changes made to the models are applied.
if (process.env.NODE_ENV !== "production" && mongoose.models[modelName]) {
  delete mongoose.models[modelName];
}

Snack = mongoose.model(modelName, schema);
export default Snack;

export type SnackDoc = mongoose.HydratedDocument<SnackData>;
