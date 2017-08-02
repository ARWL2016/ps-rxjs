import { Observable } from "rxjs";

let numbers: number[] = [1, 5, 10];
let source: Observable<number> = Observable.create(observer => {

  for (let n of numbers) {
    observer.next(n);
  }

  observer.complete();

});



source.subscribe(
  value => console.log(`value: ${value}`),
  error => console.log(`error: ${error}`),
  () => console.log("Complete!")

);