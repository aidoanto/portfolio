---
fileClass: piece
type:
  - piece
archive: false
by:
  - Aidan
tags: 
url: https://www.aidanmolins.com/Footnotes-5ca0bdd06aeb44068fabe142f6d4198b
for:
  - portfolio
draft: false
title: 📜 Footnotes
---

## What's RAG?

RAG has become quite common in recent months as a way to use Large Language Models (LLMs) to provide information and answers without hallucination. Here's a simplified explanation of how it works:

1. The user provides a query, which may be poorly phrased or spelled, for example,
   
   > _"Can I use USB-NT plus with my apple phone?"_

2. A retrieval system interprets the deeper meaning of this query, and matches it to the meanings of information stored in a vector database. The retrieval system finds the most relevant content to match this query.
   
   > _**Snippet from NT-USB User guide**: If you are using an iPhone with a Lightning port, you will need to use a Lightning Accessory Cable like the SC19 to connect to the NT-USB+._
   
   Note that the key phrases in that snippet don't actually match the ones in the query! The matches from vector databases are based on semantic meaning.

3. Then, the system just queries an LLM, the same way that you might ask ChatGPT something. The only difference is that it also includes the context (e.g. that snippet from the user guide) in the query, as well as your question.

   The LLM is receiving the user query and context which answers the question at the same time, so it is much more effective at returning with the correct answer. My early testing using this technology revealed as much!

   ![[portfolio-Screenshot_2023-12-30_213348.png]]

   The first answer, using this RAG system, wasn't perfect, but was almost usable. The second answer (just asking the LLM directly without context) was gibberish. Note how the RAG system is also able to return a source for this knowledge, alongside the answer. This is helpful not only to allow users to trace a piece of information and verify it, but also to give credit to the creators of that knowledge!

## What is a vector database?

When you search a traditional database, the terms you use need to be an exact match to the results you're looking for. But what if your question is messy, like "How do I make my voice sound better on streams?"

That's where vector databases come in:

1. Each piece of info (article, guide, support transcript) gets translated into "vectors." This is like a numerical fingerprint of its meaning, not just the exact words. Since they're numbers, you could imagine them mapped into 3D space like in the diagram on the right.

2. Your question gets 'translated' into vectors too.
   
   How is this translation done? It's done with an 'embeddings model', which is a complicated AI model with a lot of similarities to an LLM.

3. The database finds the closest vectors, meaning the content most relevant to what you asked, even if the wording is totally different.

![[vector.jpg]]
[Source.](https://weaviate.io/blog/what-is-a-vector-database)