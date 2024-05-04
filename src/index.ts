import express, { Express } from "express";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";
import sampleQueueProducer from "./producers/sampleQueueProducer";

const app: Express = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
	console.log(`Server started at *:${serverConfig.PORT}`);

	SampleWorker('SampleQueue');

	sampleQueueProducer('SampleJob', {
		name: "Sanket",
		company: "Microsoft",
		position: "SDE 2 L61",
		locatiion: "Remote | BLR | Noida"
	});
});  