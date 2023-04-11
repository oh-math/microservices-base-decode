# Getting Started 

## Initialization 

`1. Install dependencies`

first on this path: **microservices-base-decode/apps/purchases** \
later on this path: **microservices-base-decode/apps/classroom**
``` Bash
npm i
```

`2. Create a container`

Don't forget you need to insert this where the docker-compose file is \
path: **microservices-base-decode**
``` bash
docker-compose up -d
```

`3. Start migration and applications`

first on this path: **microservices-base-decode/apps/purchases** \
later on this path: **microservices-base-decode/apps/classroom**
``` bash
scripts/init.sh
```

--- 

Product ID auto-created: **99f07341-3e8c-451f-80dd-705b20f23becf6d69489-f5b4-45e6-95fa-ae4d6ab45c3c**