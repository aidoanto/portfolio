---
fileClass: piece
type:
  - piece
archive: false
by:
  - Aidan
tags: 
url: https://www.aidanmolins.com/Innovating-Customer-Service-with-AI-and-Data-Analysis-at-Lorikeet-11853792ce3480f09f5fdda70b190010
for:
  - portfolio
draft: false
title: 🦜 Innovating Customer Service with AI and Data Analysis at Lorikeet
---
### Or, how I turned messy customer service data into automated workflows by combining Python, machine learning, and a healthy appreciation for the everyday work of support teams.
# The Challenge

At Lorikeet (formerly OpTech), an AI-driven customer service platform, I worked closely with customers looking to scale their support operations using our agentic AI customer service application. To do do this, we used our platform to create workflows, similar to the one below.

This kind of structured data is rarely held by customer service teams, and when it is, it’s not always accurate.
![[Example_AI_customer_service_workflow_(1).png]]
A simplified example of an AI customer service workflow on our platform. This kind of structured data is rarely held by customer service teams, and when it is, it’s not always accurate.
The creation of these workflows required the following:

1. A list of categories incoming customer messages could have, e.g.
    
    > `Refunds`, `Delivery status`, `Product enquiries`, `Complaints`
    
2. A breakdown of ticket volumes using this list of categories, showing the categories with the highest volume. Workflows could take a while to create and launch – so we wanted to make sure our time was being spent creating workflows that customers would use.
    
3. An idea of the complexity of each topic, as it relates to the ability for an AI agent to resolve tickets from it. This was a hard task even for human staff to do. We ended up using “average number of tickets in each topic” as a makeshift indicator of the topic’s complexity. One could assume a topic with an average of two emails per customer service thread would be simple for an AI to resolve, and one with an average of 16 would be relatively complicated.
    
4. Once the workflow’s topic has been decided, instructions (like in the diagram above) need to be created according to our app’s configuration.
    

Needless to say, this kind of data was rarely held by customer support organisations. Even if they could list the categories, they might not be accurate, or helpful for our system. Having worked in customer service myself previously, I was aware of all the ways in which the job seemed somewhat simple to support leaders, but required an unappreciated level of insight from staff members themselves.

Thus, we faced a significant challenge: How do you create AI customer service workflows, or decide on customer service automation strategies for large-scale support operations when you only have unstructured conversation data to work with?

I needed to develop a method that could quickly turn raw customer service conversations into actionable insights and workflow recommendations.
# Topic analysis
The first part of the challenge would be to generate a list of categories customer service tickets could be organised into, and use an LLM’s API to perform the categorisation on each ticket.
To address this challenge, I developed a data analysis pipeline using Python and machine learning techniques. Here's how it worked:

1. First, I took a sample of around 2000 tickets from a customer’s customer service database and grouped tickets by their topic (using a machine learning method called [k-means clustering](https://en.wikipedia.org/wiki/K-means_clustering)).
2. Then, we had an LLM analyze a few tickets from each cluster to interpret what identify what actual categories you should create, to categorise other tickets in the database.
3. Finally, we used those categories to sort a much larger sample of tickets, as many as 20,000, to get a more accurate idea of how much volume each topic had.
4. I produced a dot plot chart of topics and volume for each, along with the average number of tickets for each topic (see below). These charts were very rewarding to produce because they received a lot of love from our customer champions and their executive sponsors for being clear, practical and insightful.
  
![[Topic_analysis_diagram_1_(1) 2.png]]
![[Topic_analysis_diagram_2_(1).png]]
## The Results
The impact surprised even me:

- Within just a few months, clients were automating up to 40% of their customer service tickets.
- New clients could start optimizing right away instead of spending weeks figuring things out.
- Best of all, one of our engineers saw the potential in my Python prototype and developed it into a proper product feature that every client could use.
# Further research
After becoming with the topic analysis process described above, I used the program I created to tackle a bigger challenge: Using machine learning techniques to turn conversation data into complete workflows

1. **Conversation Flow Mapping**: I created a recursive program that analyzed not just initial queries, but entire conversation threads. This allowed us to map out how conversations typically progressed for different topics.
2. **Workflow Inference**: By combining the topic analysis and conversation flow data, my program could suggest entire customer service workflows, complete with decision points and response templates.
![[Topic_analysis_diagram_3_(2).png]]
# What did I learn doing this?

- I was previously aware that the best way to tackle problems was by breaking them down into smaller and smaller ones. This process really solidified that learning for me.
- In the past, I’ve struggled learning technical skills, but in this case, I learned the skills I used here with a surprising pace. I learned that if I’ve got a challenge that’s meaningful enough to me, there’s nothing “too technical” to learn in the course of solving it.
- Customer service is hard. Customer service agents should receive their own public holiday.