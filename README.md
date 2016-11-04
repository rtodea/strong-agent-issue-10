Instructions for reproduction of [`strong-agent`](https://github.com/strongloop/strong-agent)
[ISSUE-10](https://github.com/strongloop/strong-agent/issues/10)

### Install Redis
```
brew install redis
brew services start redis
```

### Install Dependencies
```
npm install
```

### Start App
```
npm run start
```

### Create a Job

```
curl  -H 'Content-Type: application/json' -d '{"type": "simple-job", "data": {"title": "Simple Job"}}' localhost:3000/api/job 
```

### Non-Kue Failing Endpoint
```
# Fails
curl  -H 'Content-Type: application/json' localhost:3000/redis/hset/bad
# Works
curl  -H 'Content-Type: application/json' localhost:3000/redis/hset/good
```
