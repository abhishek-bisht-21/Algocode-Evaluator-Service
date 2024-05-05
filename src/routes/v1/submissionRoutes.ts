import express from "express";

import { addSubmission } from "../../controllers/submissionController";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto";
import { validate } from "../../validator/createSubmissionValidator";

const submissionRouter = express.Router();

submissionRouter.post(
    '/', 
    validate(createSubmissionZodSchema),
    addSubmission
);

export default submissionRouter;