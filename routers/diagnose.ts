import express from "express";
import diagnosisData from "../diagnosisData";
import Diagnoses from "../types";
const router = express.Router();

router.get("/patients", (_req,res)=>{
    res.json(diagnosisData);
});

router.post("/patients", (req,res)=>{
    res.send("Saving a patient!");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body:Diagnoses = req.body;
    diagnosisData.push(body);
});

export default router;