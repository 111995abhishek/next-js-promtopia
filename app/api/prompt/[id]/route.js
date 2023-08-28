import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async(request,{params}) => {
    try{
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        if(!prompt){
            return new Response("Prompt not found",{status:404})
        }
        return new Response(JSON.stringify(prompts),{status:200})
    }catch(error){
        return new Response('failed to fetch all prompt',{status:500})
    }
}

//patch update
export const PATCH = async(request, {params}) => {
    const {prompt, tag} = await request.json();
    try{
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);

    }catch(error){
    }
};