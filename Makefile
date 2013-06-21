JADE = $(shell find . -wholename './*.jade')
JS = $(shell find . -wholename './*.js')
HTML = $(JADE:.jade=.html)

all: js $(HTML)
	cp static/* output

%.html: %.jade
	mkdir -p output
	jade < $< --path $< > output/$@

js:
	mkdir -p bin
	uglifyjs main.js > bin/main.js

clean:
	rm -f $(HTML)
	rm -f output/*
	rm -f bin/*

.PHONY: clean