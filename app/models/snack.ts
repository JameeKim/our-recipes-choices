import mongoose from "mongoose";

/**
 * Structure of the snack model
 */
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

// Remove the previous version of the model that is already registered. While
// inefficient, this ensures that any changes made to the models are applied.
if (process.env.NODE_ENV !== "production" && mongoose.models[modelName]) {
  delete mongoose.models[modelName];
}

/**
 * Mongoose model for snacks
 */
const Snack = mongoose.model(modelName, schema);
export default Snack;

/**
 * The type of mongoose document for snacks
 */
export type SnackDoc = mongoose.HydratedDocument<SnackData>;
