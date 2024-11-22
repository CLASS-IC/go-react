package main

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"log"
)

type Todo struct {
	ID        int    `json:"id"`
	Completed bool   `json:"completed"`
	Body      string `json:"body"`
}

func main() {
	fmt.Println("Hello Worlds")
	app := fiber.New()

	todos := []Todo{}

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Status(200).JSON(fiber.Map{"msg": "Hello Worlds"})
	})

	app.Post("/api/todos", func(c *fiber.Ctx) error {
		todo := &Todo{} //{id:0,completed:False,body:""}

		if err := c.BodyParser(todo); err != nil {
			return err
		}
		if todo.Body == "" {
			return c.Status(400).JSON(fiber.Map{"msg": "Body is required"})
		}

		todo.ID = len(todos) + 1
		todos = append(todos, *todo)
		return c.Status(201).JSON(todo)
	})

	log.Fatal(app.Listen(":4000"))
}