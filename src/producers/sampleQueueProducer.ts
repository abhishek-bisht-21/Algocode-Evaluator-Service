import sampleQueue from "../queues/SampleQueue";

export default async function(name: string, payload: Record<string, unknown>) {
    await sampleQueue.add(name, payload);
    console.log("Successfully added a new job");
}