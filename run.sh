export JOB_NAME=codeceptjs-todomvc
docker build -t $JOB_NAME . && docker run -e RUNID=${RUNID} -e HEADLESS=true -e PROJECT_NAME=${PROJECT_NAME} -e NODE_ENV=${NODE_ENV} -t $JOB_NAME
