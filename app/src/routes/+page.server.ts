import type { RequestEvent } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

export const actions = {
	default: async ({ cookies, request }: RequestEvent) => {
		const data = Object.fromEntries(await request.formData());

        // Abort if file has no name (no file uploaded)
        if (!(data.file as File).name || (data.file as File).name === "undefined") {
            return fail(400, { error: true, message: "You must provide a file to upload"});
        }

        const { file } = data as { file: File };

        // Only accept audio files
        if (!file.type.startsWith("audio")) {
            return fail(400, { error: true, message: "You must upload an audio file" })
        }

        console.log(file);

        return { success: true };
	}
};
