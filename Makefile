JADE = $(shell find . -wholename './*.jade')
HTML = $(JADE:.jade=.html)

all: $(HTML)

%.html: %.jade
	jade < $< --path $< > output/$@

clean:
	rm -f $(HTML)

.PHONY: clean