import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

async function main() {
  const user = await prisma.user.findMany();
  console.log(user);
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

app.post("/usuarios", async (req, res) => {
  try {
    await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });

    res.status(201).json(req.body);
  } catch (error) {
    console.log(
      "Falha ao salvar o registro no banco de dados. Dados inválidos ou problema de conexão."
    );
    res.status(500).json({ error: error.message });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    console.log(
      "Falha ao acessar o registro no banco de dados. Dados inválidos ou problema de conexão."
    );
    res.status(500).json({ error: error.message });
  }
});

app.get("/usuarios/:id", async (req, res) => {
  try {
    const users = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.log(
      "Falha ao acessar o registro no banco de dados. Dados inválidos ou problema de conexão."
    );
    res.status(500).json({ error: error.message });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    console.log(req);

    await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });

    res.status(201).json(req.body);
  } catch (error) {
    console.log(
      "Falha ao editar registro no banco de dados. Dados inválidos ou problema de conexão."
    );
    res.status(500).json({ error: error.message });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    console.log(
      "Falha ao deletar o registro no banco de dados. Dados inválidos ou problema de conexão."
    );
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 3000, (erro) => {
  if (erro) throw erro;
  console.log(`App listening on port ${process.env.PORT || 3000}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Prisma client desconectado.');
  process.exit(0);
});