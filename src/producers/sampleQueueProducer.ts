import sampleQueue from "../queues/SampleQueue";

export default async function(name: string, payload: Record<string, unknown>, priority: number) {
    await sampleQueue.add(name, payload, {priority});
    console.log("Successfully added a new job");
}