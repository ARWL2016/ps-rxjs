import { Observable } from "rxjs";

export function load(url: string) {
  return Observable.create(observer => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        observer.next(data);
        observer.complete();
      } else {
        observer.error(xhr.statusText);
      }

    });

    xhr.open("GET", url);
    xhr.send();
  }).retry(3);
}

export function loadWithFetch(url: string) {
  return Observable.defer(() => {
    return Observable.fromPromise(fetch(url).then(res => res.json()));
  });
}