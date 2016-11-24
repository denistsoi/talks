# Infrastructure is “easy" as Pi.
# DevOps 101

## Leave if you already know the following
- Devops is your jam
- deloyed multiple applications/services
- infrastructure is your vice
- know how to deploy on multiple architectures to multiple physical locations
- you plan to use a serverless infrastructure setup (more on this later)

## Aims
- Introduction
- What's the problem and why does DevOps Exist?

- Overview
  - What do you need
  - Building the rig (buy the right screws!!!) 
  - Setting up

- Distros (ARM architecture)
  - Hypriot 
  - Raspbian (or similar linux distro)

- Conclusion
- How to deal with Serveless Architecture

## Demographic
- "I know some things, but nothing about infrastucture" - junior/intermediate developer

## Acknowledgements
- Hypriot
- Docker Captains
- HKWD (specifically Ambroise)

## Primer 
- NA

---

## Summary

There are many different tools that serve different purposes whilst building an infrastructure solution. What are those tools and how do they differ from each other?

What is Kubernetes? Docker? Docker Swarm vs Docker Compose? Containers? Microservice? etc etc

Common Problems:

- (auto)-scaling platform/services
- monitoring, testing and deployment
- Automation vs Orchestration

Aim:

The aim of this talk to give a high-level run down over the various domain-specific terminology that is required to getting started with learning about devops and setting up infrastructure.

Deployment vs Orchestration vs Tools provided by Hosting Services/Providers

## An Imaginary History Lesson

I have an application that I've written, normally I would FTP that application onto a remote server that I may have purchased/rented. If I wanted to create multiple instances of that application over different locations, I would have to create/install servers in different locations manually. (example early Google with custom hardware in server farm).

#### Then what happened?

I now recreate virtual environments on remote servers (windows/Linux VM), which may or may not require server administrators to maintain that hardware and manually install OS updates.

#### Then what happened?

I could create Virtual Boxes to create diffent VMs. 

But what if we want to create/manage and deploy different VMs over different locations?

<!-- This is where VM deployment managers like Ansible/Vagrant came in.

Why was this seen as a potential problem? -->

#### why do i want to create a linux machine?  

Sometimes, applications could be run quite reasonably on a linux machine, without the need for expensive licensing of proprietary OS environments, as well as allowing the developer to maximise resource capacity for the application. (rather than install sections of the OS which may not be required for the application to function most efficiently)

#### Why was this such an issue?  

Because, during this time, developers began to see the advantage of both separating the pieces of a LSA into smaller pieces (microservices), which allowed for easier maintenance, as well as leveraging maximum physical computing resources for each service.

So what's the difference between Ansible/Vagrant & Docker?

What's the easiest way to get myself started on orchestration?

### Hold on!

first of all, you need to figure out what you want to leverage: 
- config files/existing hosting support and/or 
- availability to increase technical debt?

### Setting up;

- install docker container is fine; 
  - but what about publishing and deploying containers? (Docker Hub)
  - How about sharing ports/data



### Sources
Stack Overflow [Answer](http://stackoverflow.com/a/18287169/2903169)  
[how to scale docker](http://stackoverflow.com/questions/18285212/  how-to-scale-docker-containers-in-production)  
Alex Ellis. (Docker Captain, does incredible work with Pis)  
Incredible Team from Hypriot.  
