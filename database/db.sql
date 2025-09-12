create table recipes (
    id integer primary key autoincrement,
    title varchar(100) not null,
    description varchar(255),
    preparation_time integer,
    servings integer,
    ingredients text not null,
    instructions text not null,
    image_path varchar(255)
);

insert into recipes (title, description, preparation_time, servings, ingredients, instructions, image_path) values
('Spaghetti Carbonara', 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.', 20, 4, '200g spaghetti, 100g pancetta, 2 large eggs, 50g Pecorino cheese, 50g Parmesan cheese, Freshly ground black pepper, Salt', '1. Cook the spaghetti in a large pot of boiling salted water until al dente. 2. In a separate pan, cook the pancetta until crispy. 3. Beat the eggs in a bowl and mix in the cheeses and a generous amount of black pepper. 4. Drain the pasta and return it to the pot. Quickly mix in the pancetta and egg mixture, stirring vigorously to create a creamy sauce. 5. Serve immediately with extra cheese and pepper.', '/images/spaghetti_carbonara.jpg'),
('Chicken Curry', 'A flavorful chicken curry made with a blend of spices and coconut milk.', 40, 4, '500g chicken breast, 1 onion, 2 garlic cloves, 1 tbsp ginger paste, 2 tbsp curry powder, 400ml coconut milk, 2 tbsp vegetable oil, Salt', '1. Heat oil in a large pan and sauté chopped onions until translucent. 2. Add garlic and ginger paste and cook for another minute. 3. Add curry powder and cook for a minute to release the flavors. 4. Add chicken pieces and cook until browned on all sides. 5. Pour in coconut milk and simmer for 20-25 minutes until chicken is cooked through and sauce has thickened. Season with salt to taste.', '/images/chicken_curry.jpg');
