## avaliable APIs

| HTTP method | URI path                            | Description                              |
| ----------- | :---------------------------------- | ---------------------------------------- |
| `GET`       | `/houses`                           | retrieves all houses                     |
| `GET`       | `/postcode/:postcode/houses`        | retrieves all houses in given postcode   |
| `GET`       | `/postcode/:postcode/average_price` | retrieves average price in postcode      |
| `GET`       | `/street/:street/houses`            | retrieves all houses in given street     |
| `GET`       | `/street/:street/average_price`     | retrieves average price in street        |
| `GET`       | `/town/:town/houses`                | retrieves all houses in given town       |
| `GET`       | `/town/:town/average_price`         | retrieves average price in town          |
| `GET`       | `/county/:county/houses`            | retrieves all houses in given county     |
| `GET`       | `/district/:district/houses`        | retrieves all houses in given district   |
| `GET`       | `/district/:district/average_price` | retrieves average price in district      |
| `GET`       | `/locality/:locality/houses`        | retrieves all houses in a given locality |
| `GET`       | `/locality/:locality/average_price` | retrieves average price in locality      |


## Property Type Key

| Letter | Property Type   |
| ------ | --------------- |
| d      | Detached        |
| s      | Semi-detached   |
| t      | Terraced        |
| f      | Flat/Maisonette |
| o      | Other           |