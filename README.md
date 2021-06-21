
# Project Title

A Job listing website


## Acknowledgements

 - [Bootstrap 5](https://getbootstrap.com/)
 - [readme.so](https://readme.so/editor)
 - [react tippy](https://www.npmjs.com/package/react-tippy)

  
## API Reference

#### Get all items

```http
  GET api.dataatwork.org/v1/jobs
  
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `       ` | `string` | **Required**. Your API   |

#### Get item

```http
  GET GET api.dataatwork.org/v1/jobs/<uuid>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. uuid of item to fetch |

#### Get item

```http
  GET GET api.dataatwork.org/v1/jobs/<link>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| link      | `string` | **Required**.link of item to fetch |
