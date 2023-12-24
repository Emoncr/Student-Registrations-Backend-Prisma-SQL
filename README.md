## API DOCUMENTATIONS
1. Api for create single student
    API_ROUTE: http://localhost:3000/api/single_student
    METHODE:POST
    Post Body: {
                    "first_name": "Boplob Hasan",
                    "last_name": "Emon",
                    "age": "21",
                    "grade": "A+",
                    "courses": "bangla,english,math"
                } 
    Response: {
                "message": "Student created successfully",
                "createdStudent": {
                    "id": 123,
                    "first_name": "John",
                    "last_name": "Doe",
                    "age": "18",
                    "grade": "12",
                    "courses": "Math, Science"
                }
            }

2. Api for registering many students at once
    API_ROUTE: http://localhost:3000/api/all_students
    METHODE:POST
    POST BODY: [
                {
                    "first_name": "test 1",
                    "last_name": "Emon",
                    "age": "21",
                    "grade": "A+",
                    "courses": "courses"
                },
                {
                    "first_name": "test 2",
                    "last_name": "Emon",
                    "age": "26",
                    "grade": "A+",
                    "courses": "courses"
                },
                {
                    "first_name": "test 3 ",
                    "last_name": "Emon",
                    "age": "20",
                    "grade": "A+",
                    "courses": "courses"
                }
            ]
    Response: {
                 "message": "Students created successfully",
                "createdStudent": {
                        "count": 3
                 }
            }

3. Api For Detele Single Student

    API_ROUTE: http://localhost:3000/api/single_student?id=2      
    METHODE:DELETE,
    POST BODY:It receive an params name id 
    Response:{
                "message": "Student Deleted successfully",
                "deletedStudent": {
                    "id": 3,
                    "first_name": "test 2",
                    "last_name": "Emon",
                    "age": "26",
                    "grade": "A+",
                    "courses": "courses"
                }
            }

4. Api for update student informations
    API_ROUTE: http://localhost:3000/api/single_student?id=2      // It receive an params name id 
    METHODE:PATCH,
    POST BODY : {
                    "first_name": "Boplob  Hasan  [updated]"
                }
    Response:{
                "message": "Student Updated successfully",
                "updatedStudent": {
                    "id": 6,
                    "first_name": "Boplob  Hasan  [updated]",
                    "last_name": "Emon",
                    "age": "26",
                    "grade": "A+",
                    "courses": "courses"
                }
            }

5. Api for show the data of a single student
    API_ROUTE: http://localhost:3000/api/single_student?id=1      // It receive an params name id 
    METHODE: GET
    POST BODY:   It receive an params name id 
    Response:{
                "message": "Success",
                "result": {
                    "id": 1,
                    "first_name": "Boplob Hasan",
                    "last_name": "Emon",
                    "age": "21",
                    "grade": "A+",
                    "courses": "courses"
                }
            }


6. Api for get all students together.
    API_ROUTE: http://localhost:3000/api/all_students
    METHODE:GET
    POST BODY: none,
    Response: {
    "message": "Success",
    "students": [
                {
                    "id": 1,
                    "first_name": "Boplob Hasan",
                    "last_name": "Emon",
                    "age": "21",
                    "grade": "A+",
                    "courses": "courses"
                },
                {
                    "id": 4,
                    "first_name": "test 3 ",
                    "last_name": "Emon",
                    "age": "20",
                    "grade": "A+",
                    "courses": "courses"
                },
                {
                    "id": 5,
                    "first_name": "test 1",
                    "last_name": "Emon",
                    "age": "21",
                    "grade": "A+",
                    "courses": "courses"
                },
            ]
        }







## Installation Process

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
