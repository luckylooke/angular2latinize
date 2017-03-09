# angular2latinize
Angular 2 simple latinize service for removing accents from latin characters, also for ionic 2 applications.

## DEMO

Hosted by gh-pages [github.io/angular2latinize](https://luckylooke.github.io/angular2latinize/demo/dist/index.html)

## installation
```
npm install angular2latinize
```

## usage

my-class.ts
```typescript
import { Latinize }	from 'angular2latinize';

export class myClass {

	constructor (
		latinize: Latinize
	) {
		console.log('latinize "crème brûlée" -> ', this.latinize.convert('crème brûlée')); // results 'creme brulee'
	}
	
}
```
app-module.ts
```typescript
import { NgModule } from '@angular/core';
import { Latinize }	from 'angular2latinize';

@NgModule({
	// ...
	providers: [
		Latinize
	]
})
export class AppModule {}
```

## Extending characters map
You can use the Latinize.charmap object to access the translation dictionary or to change the mapping
```typescript
Latinize.charmap['Ω'] = 'O';
 
// modify the behavior for German umlauts 
_.extend(Latinize.charmap,
  {'Ä': 'Ae', 'Ä': 'Ae', 'Ü': 'Ue', 'ä': 'ae', 'ö': 'oe', 'ü': 'ue'});
```