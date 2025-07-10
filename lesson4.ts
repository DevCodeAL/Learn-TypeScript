// // Lesson 4 Typescript Unknown Type

// // Like any type you can asign any value
let result: unknown;

// example
result = 1;
result = 'hello';
result = false;
result = Symbol();
result = { name: 'John' };
result = [1, 3, 3];

// example implementations
let sumAll: unknown;
sumAll = [2, 4, 6];

const total = (sumAll as number[]).reduce((a, b)=> a + b, 0);

const fetchData = async(url: string): Promise<unknown>=>{
        const response = await fetch(url);
        return await response.json();
};

const showPost = async()=>{
      const url = 'https://jsonplaceholder.typicode.com/posts';
      try {
        const post = await fetchData(url);
        (post as {userId: number, id: number, title: string, body: string }[]).map((item)=> console.log(item.title));
      } catch (error) {
        console.log(error);
      }
}

showPost();