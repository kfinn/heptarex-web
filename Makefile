JADE = $(shell find . -wholename './*.jade')
HTML = $(JADE:.jade=.html)

all: $(HTML)
	cp static/* output

%.html: %.jade
	mkdir -p output
	jade < $< --path $< > output/$@

clean:
	rm -f $(HTML)

.PHONY: clean