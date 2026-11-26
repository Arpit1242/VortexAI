import  { getModel } from "../../agent/config/llmmodel.js"

export const router = async (state) => {
    
     const llm = await getModel("router")
     const prompt = `you are an agent router.
     
     available agents
     
     - chat
     - search
        - coding
        - pdf
        - ppt
        - vision

     Rules:
     
     chat:
     General conversation,
     explanations,
     learning
     questions.

     search:
     Current events,
     latest information,
     news,
     recent developments,
     internet lookup.

     coding:
     Generate code,
     debug code,
     build projects,
     architecture,
     Api design.

     pdf: 
     Questions about generate PDFs
     or document context.

     ppt:
     Questions about generate ppts


     vision: 
       Generate image,
       create image,


     Return ONLY one Word:

     chat
     search
     coding
     pdf
     ppt
     vision

     User Query:
        ${state.prompt}
     `
     
}