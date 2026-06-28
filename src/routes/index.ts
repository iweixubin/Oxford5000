import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "Hello Express + TypeScript" + Date.now().toString()
    });
});

export default router;