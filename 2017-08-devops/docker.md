# docker workshop


based on xd

# hello world

    docker run hello-world
    docker ps -a
    docker pull
    docker run --name <name> image

    docker rm <name>

    docker run -d --name app -p 3000:3000 gvilarino/docker-testing

# connect containers

    docker network create app-network

    docker network ls

    docker network connect app-network <db>
    docker network connect app-network <app>

# compose

use https://github.com/gvilarino/docker-testing

    docker-compose.yml

    version: '2'

    services:
      app:
        build: gvilarino/docker-testing
        environment:
          MONGO_URL: "mongodb://db/test"
        depends_on:
          - db
        ports:
          - "3000:3000"

      db:
        image: mongo

### use local docker compose

change app: `build: gvilarino/docker-testing` to `build: .`

add app: 

    volumes:
      - .:/usr/src
      - /usr/src/node_modules

Other commands

    docker-compose ps
    docker-compose images
    docker-compose up -d
    docker-compose up -d -f

# swarm

    docker-machine create -d virtualbox manager
    docker-machine ssh manager
    docker-machine create -d virtualbox worker1
    docker-machine create -d virtualbox worker2

    docker-machine ssh worker1 
      docker swarm join --token <token> <default swarm location>

    docker-machine ssh worker2 
      docker swarm join --token <token> <default swarm location>

    docker node ls
    docker service create --name pinger --replicas 1 alpine ping docker.com
    docker service scale pinger=5
    docker-machine rm worker1


    docker rmi $(docker ps -a -q)
    docker rm $(docker ps -a -q)

### author
Denis Tsoi
