# Tiny-Javascript-Projects
to improve my skills

What I've read/am reading:

### Scope
[Stackoverflow Answer with Examples](https://stackoverflow.com/a/500459)


### Closures
[Javascript Closures](http://www.jibbering.com/faq/notes/closures/)

```javascript
var digit_name = (function (){
	var names = ['zero','one','two','three','four','five'];

	return function (n){
		return names[n]
	};
}());

alert(digit_name(3));  // 'three'
``` [source for example](https://www.linkedin.com/learning/the-good-parts-of-javascript-and-the-web/closure-examples)

### Functions

[Function Expression vs Function Statement](https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname)

#### 4 Ways to Call a Function

##### Function form
```javascript
functionObject(arguments)
```
Using Function form: `this` is set to the global object or undefined

##### Method form
```javascript
thisObject.methodName(arguments)
thisObject["methodName"](arguments)
```
Using Method form: `this` is bound to `thisObject`

##### Constructor form
```javascript
new FunctionObject(arguments)
```
Using Constructor form: `this` is bound to new object


##### Apply form
```javascript
functionObject.apply(thisObject,[arguments])
```
Using Apply form: `this` is bound to `thisObject` because explicitly stated by user.
