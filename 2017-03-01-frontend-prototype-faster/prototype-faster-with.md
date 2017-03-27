# devtools for a frontend expert but devops noob

## Leave if you already know the following
- if you have a tool chain which is easy as pi
- know about ci/cd and implement that as part of your workflow

## contents
1. primer
2. considerations

## Update 27-03-2017 (credit to Vincent Lau [vincentlaucy](https://github.com/vincentlaucy) for code4hk/showmethecode talk)  

3. what we will go through
    
    3.1. gh-pages  
    3.2. heroku  
    3.3. surge.sh  
    3.4. netlify  
    3.5. contentful  
    3.6. glitch/fogcreek  
    3.7. others (aws/serverless architecture)  

### 3.1. gh-pages  
  
[gh-pages](https://pages.github.com/), the issue with using gh-pages is that either i need to create the static html and deploy via `git` and ensure that the repository structure is similar to a `public/` folder. The other issue is that the templating engine is using `jekyll` and adds another tool chain **ruby**. The final issue is that the built static site will not be able to cope with any backend functionality.  

### 3.2. heroku  

[heroku](https://www.heroku.com/) is a PaaS (platform as a service) and allows a wide variety of languages/stacks to be deployed onto their platform. To hookup a static frontend, you may have to append a backend stack: (`node/php/golang/python` etc).  
For strict frontend developers, this might be quite daunting. The other issue is that even though there is a free tier on heroku for developers, the `free-tier` is quite limiting in terms of service coverage. 

### 3.3. surge.sh  

[Surge.sh](https://surge.sh/) is a shell command line tool that allows publishing to the web from the terminal. Especially for developers under the node stack, surge is versatile.

### 3.4. netlify, credit vincentlau  

[Netlify](https://www.netlify.com/) is an interesting platform that also deploy over multiple locations. 
I'd say that this is a simplier toolchain, and doesn't price for low traffic/open source projects.

### 3.5. contentful, credit vincentlau  

[Content API as a Service](https://www.contentful.com/) is another interesting service that providers 10,000 records and 50,000 API calls per month.

### 3.6. glitch  
[Glitch](https://glitch.com/) is a free platform that allows browser editing both front and backend. This is definitely something to watch.

### 3.7. others/aws  