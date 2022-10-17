# IS Demo

## Notes

- Requires Python 3.10.*


## Local setup

Clone this repository and then:

```
$ cd <install-directory>
```

Create and activate your virtual environment:

```
$ python -m venv env
$ source ./env/bin/activate
```

Install requirements:

```
(env) $ pip install -r requirements/requirements-dev.txt
```

(NOTE: `requirements-dev.txt` includes `requirements.txt` automatically)

### Pre-commit hooks

This repository uses the [pre-commit](https://pre-commit.com/) framework to perform certain sanity checks during development. This includes detecting any private keys you may have accidentally added to the repository. For a full list see the file `<install-directory>/.pre-commit-config.yaml`.

Run pre-commit install to set up the git hook scripts

```
(env) $ pre-commit install
```

Now pre-commit will run automatically on git commit.

## Running

To run the app with a basic HTTP server:

```
(env) $ python -m http.server
```

And then visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

## Next Steps

Things to improve this demo:

- [ ] Write some tests
- [ ] Add Flask or Django app to enable client resiliance, result caching, and more interactive filters
- [ ] Bundle javascript to reduce HTTP requests
