# Animal Universe REST API

## How to use
1. Fork and clone this repo
2. Install node modules (ie. npm install)
3. Run application (ie. npm start)
4. Have fun with the api (See details below)

## Animal Universe API Routes
### Animal Routes
#### List all animals
* GET http://localhost:1337/api/animals

### Cat Routes
#### List all cats
* GET http://localhost:1337/api/animals/cats

#### Add a new cat
* POST http://localhost:1337/api/animals/cats

```
Request Body example: 
{
	"name": "Anastasia",
	"breed": "Russian Blue",
	"color": "Gray"
}
```

#### Find cat by id
* GET http://localhost:1337/api/animals/cats/[id]
Note: [id] is a number

#### Order a specific cat to make noise
* GET http://localhost:1337/api/animals/cats/[id]/makeNoise

#### Order a specific cat to say its breed
* GET http://localhost:1337/api/animals/cats/[id]/sayBreed

#### Order a specific cat to give birth
* PUT http://localhost:1337/api/animals/cats/[id]/giveBirth

```
Request Body example: 
{
	"color": "Black"
}
```

#### Order a specific cat to say its name
* GET http://localhost:1337/api/animals/cats/[id]/sayName

### Dog Routes
#### List all dogs
* GET http://localhost:1337/api/animals/dogs

#### Add a new dog
* POST http://localhost:1337/api/animals/dogs

```
Request Body example: 
{
	"name": "Capi",
	"breed": "Labrador",
	"color": "Gold"
}
```

#### Find dog by id
* GET http://localhost:1337/api/animals/dogs/[id]
Note: [id] is a number

#### Order a specific dog to bark
* GET http://localhost:1337/api/animals/dogs/[id]/bark

#### Order a specific dog to say its breed
* GET http://localhost:1337/api/animals/dogs/[id]/sayBreed

#### Order a specific dog to give birth
* PUT http://localhost:1337/api/animals/dogs/[id]/giveBirth

```
Request Body example: 
{
	"color": "White"
}
```

#### Order a specific dog to say its name
* GET http://localhost:1337/api/animals/dogs/[id]/sayName


### Lion Routes
#### List all lions
* GET http://localhost:1337/api/animals/lions

#### Add a new lion
* POST http://localhost:1337/api/animals/lions

```
Request Body example: 
{
	"name": "Sam",
}
```

#### Find lion by id
* GET http://localhost:1337/api/animals/lions/[id]
Note: [id] is a number

#### Order a specific lion to make noise
* GET http://localhost:1337/api/animals/lions/[id]/makeNoise

#### Ask a specific lion how fast it is
* GET http://localhost:1337/api/animals/lions/[id]/getSpeed

#### Order a specific lion to give birth
* PUT http://localhost:1337/api/animals/lions/[id]/giveBirth
Note: No need to specify child color in request body. I assume all lions are gold.

#### Order a specific lion to say its name
* GET http://localhost:1337/api/animals/lions/[id]/sayName

### Parrot Routes
#### List all parrots
* GET http://localhost:1337/api/animals/parrots

#### Add a new parrot
* POST http://localhost:1337/api/animals/parrots

```
Request Body example: 
{
	"name": "Sunny",
	"color": "Green"
}
```

#### Find parrot by id
* GET http://localhost:1337/api/animals/parrots/[id]
Note: [id] is a number

#### Order a specific parrot to talk
* GET http://localhost:1337/api/animals/parrots/[id]/talk

#### Order a specific parrot to fly
* GET http://localhost:1337/api/animals/parrots/[id]/fly

#### Order a specific parrot to give birth
* PUT http://localhost:1337/api/animals/parrots/[id]/giveBirth

```
Request Body example: 
{
	"color": "Green"
}
```

#### Order a specific parrot to say its name
* GET http://localhost:1337/api/animals/parrots/[id]/sayName

### Shark Routes
#### List all sharks
* GET http://localhost:1337/api/animals/sharks

#### Add a new shark
* POST http://localhost:1337/api/animals/sharks

```
Request Body example: 
{
	"name": "BigFish",
	"color": "Gray"
}
```

#### Find shark by id
* GET http://localhost:1337/api/animals/sharks/[id]
Note: [id] is a number

#### Order a specific shark to swim
* GET http://localhost:1337/api/animals/sharks/[id]/swim

#### Order a specific shark to say its favorite name
* GET http://localhost:1337/api/animals/sharks/[id]/sayFavoriteName

#### Order a specific shark to give birth
* PUT http://localhost:1337/api/animals/sharks/[id]/giveBirth

```
Request Body example: 
{
	"color": "Gray"
}
```

#### Order a specific shark to say its name
* GET http://localhost:1337/api/animals/cats/[id]/sayName

### Turtle Routes
#### List all turtles
* GET http://localhost:1337/api/animals/turtles

#### Add a new turtle
* POST http://localhost:1337/api/animals/turtles

```
Request Body example: 
{
	"name": "Charlie",
	"color": "Brown"
}
```

#### Find turtle by id
* GET http://localhost:1337/api/animals/turtles/[id]
Note: [id] is a number

#### Order a specific turtle to eat
* GET http://localhost:1337/api/animals/turtles/[id]/eat

#### Ask a specific turtle how fast it is
* GET http://localhost:1337/api/animals/turtles/[id]/getSpeed

#### Order a specific turtle to give birth
* PUT http://localhost:1337/api/animals/turtles/[id]/giveBirth

```
Request Body example: 
{
	"color": "Brown"
}
```

#### Order a specific turtle to say its name
* GET http://localhost:1337/api/animals/turtles/[id]/sayName

