"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Icon } from "@iconify/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getDatabase, ref, push, remove, update, set } from "firebase/database";
import getProducts from "@/api/products";
import Loading from "./loading";

export default function Dashboard() {
  const db = getDatabase();
  const [produtos, setProdutos] = useState([]);
  const [marca, setMarca] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [src, setSrc] = useState("");
  const [onDestac, setOnDestac] = useState(false);
  const [editingMarca, setEditingMarca] = useState("");
  const [editingModel, setEditingModel] = useState("");
  const [editingYear, setEditingYear] = useState("");
  const [editingKm, setEditingKm] = useState("");
  const [editingPrice, setEditingPrice] = useState("");
  const [editingSrc, setEditingSrc] = useState("");
  const [editingOnDestac, setEditingOnDestac] = useState(false);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false); // State for Add Dialog
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false); // State for Edit Dialog

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        router.push("/admin");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getProducts(setProdutos);
  }, []);

  useEffect(() => {
    if (produtoEmEdicao) {
      setEditingMarca(produtoEmEdicao.marca || "");
      setEditingModel(produtoEmEdicao.model || "");
      setEditingYear(produtoEmEdicao.year || "");
      setEditingKm(produtoEmEdicao.km || "");
      setEditingPrice(produtoEmEdicao.price || "");
      setEditingSrc(produtoEmEdicao.src || "");
      setEditingOnDestac(produtoEmEdicao.onDestac || false);
      setIsEditDialogOpen(true); // Open the Edit dialog when a product is being edited
    }
  }, [produtoEmEdicao]);

  const handleAdd = (ev) => {
    ev.preventDefault();

    const novoProduto = {
      marca: marca,
      model: model,
      year: year,
      km: km,
      price: price,
      src: src,
      onDestac: onDestac,
    };

    const newProductRef = push(ref(db, "produto"));

    set(newProductRef, novoProduto)
      .then(() => {
        console.log("Produto salvo com sucesso!");
        // Reset fields after saving
        setMarca("");
        setModel("");
        setYear("");
        setKm("");
        setPrice("");
        setSrc("");
        setOnDestac(false);
        setIsAddDialogOpen(false); // Close Add Dialog after saving
      })
      .catch((error) => {
        console.error("Erro ao salvar o produto: ", error);
      });
  };

  const handleDelete = (id) => {
    const produtoRef = ref(db, `produto/${id}`);
    remove(produtoRef);
  };

  const handleEdit = () => {
    if (produtoEmEdicao) {
      const produtoRef = ref(db, `produto/${produtoEmEdicao.id}`);
      const produtoEditado = {
        marca: editingMarca || produtoEmEdicao.marca,
        model: editingModel || produtoEmEdicao.model,
        year: editingYear || produtoEmEdicao.year,
        km: editingKm || produtoEmEdicao.km,
        price: editingPrice || produtoEmEdicao.price,
        src: editingSrc || produtoEmEdicao.src,
        onDestac:
          editingOnDestac !== undefined
            ? editingOnDestac
            : produtoEmEdicao.onDestac,
      };

      update(produtoRef, produtoEditado)
        .then(() => {
          console.log("Produto atualizado com sucesso!");
          setIsEditDialogOpen(false); // Close Edit Dialog after updating
          setProdutoEmEdicao(null); // Reset the product being edited
        })
        .catch((error) => {
          console.error("Erro ao atualizar o produto: ", error);
        });
    }
  };

  const handleOut = () => {
    signOut(auth).then(() => {
      router.push("/admin");
    });
  };

  if (loading) {
    return null;
  }

  return (
    <div className="flex overflow-x-hidden flex-col h-auto items-center border-[rgba(241,188,163,1)] border-b-3 border-dashed mb-[6rem] w-full justify-self-center">
      <div className="flex items-center flex-row justify-end overflow-x-auto  w-full max-w-7xl">
        <div className="flex flex-row gap-5 items-center max-[850px]:hidden">
          <button
            onClick={handleOut}
            className="bg-[#b47043] text-1xl font-medium px-4 py-4 text-slate-50 rounded-full mt-5"
          >
            <Icon icon="ri:logout-box-line" />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between overflow-x-auto w-full  self-center max-w-7xl ">
        <h1 className="text-2xl">Gerencie seus produtos</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="flex gap-2 mt-[2rem] mb-8"
              onClick={() => setIsAddDialogOpen(true)}
            >
              Adicionar produto
              <Icon icon="material-symbols:add" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar produto</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="marca" className="text-right">
                  Marca:
                </Label>
                <Input
                  id="marca"
                  value={marca}
                  className="col-span-3"
                  onChange={(ev) => setMarca(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  Modelo:
                </Label>
                <Input
                  id="modelo"
                  value={model}
                  className="col-span-3"
                  onChange={(ev) => setModel(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  Ano:
                </Label>
                <Input
                  id="year"
                  value={year}
                  className="col-span-3"
                  onChange={(ev) => setYear(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="km" className="text-right">
                  Quilometros rodados:
                </Label>
                <Input
                  id="km"
                  value={km}
                  className="col-span-3"
                  onChange={(ev) => setKm(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Preço:
                </Label>
                <Input
                  id="price"
                  value={price}
                  className="col-span-3"
                  onChange={(ev) => setPrice(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="src" className="text-right">
                  Link da imagem:
                </Label>
                <Input
                  id="src"
                  value={src}
                  className="col-span-3"
                  onChange={(ev) => setSrc(ev.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="onDestac" className="text-right">
                  Em destaque?
                </Label>
                <Input
                  id="onDestac"
                  type="checkbox"
                  className="flex items-center rounded-lg p-3 px-4 text-slate-400 self-start col-span-3 bg-slate-200 w-5"
                  checked={onDestac}
                  onChange={() => setOnDestac(!onDestac)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAdd}>
                Adicionar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto w-full max-w-7xl ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>Modelo</TableHead>
              <TableHead>Ano</TableHead>
              <TableHead>Km</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead className="text-right">Destaque</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>{produto.id}</TableCell>
                <TableCell>{produto.marca}</TableCell>
                <TableCell>{produto.model}</TableCell>
                <TableCell>{produto.year}</TableCell>
                <TableCell>{produto.km}</TableCell>
                <TableCell>{produto.price}</TableCell>
                <TableCell className="text-right">
                  {produto.onDestac.toString()}
                </TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <Dialog
                      open={isEditDialogOpen}
                      onOpenChange={setIsEditDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Icon
                          icon="material-symbols:settings-rounded"
                          className="cursor-pointer text-2xl"
                          onClick={() => {
                            setProdutoEmEdicao(produto);
                            setIsEditDialogOpen(true);
                          }}
                        />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Editar produto</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="editMarca" className="text-right">
                              Marca:
                            </Label>
                            <Input
                              id="editMarca"
                              value={editingMarca}
                              className="col-span-3"
                              onChange={(ev) =>
                                setEditingMarca(ev.target.value)
                              }
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="editModel" className="text-right">
                              Modelo:
                            </Label>
                            <Input
                              id="editModel"
                              value={editingModel}
                              className="col-span-3"
                              onChange={(ev) =>
                                setEditingModel(ev.target.value)
                              }
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="editYear" className="text-right">
                              Ano:
                            </Label>
                            <Input
                              id="editYear"
                              value={editingYear}
                              className="col-span-3"
                              onChange={(ev) => setEditingYear(ev.target.value)}
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="editKm" className="text-right">
                              Quilometros rodados:
                            </Label>
                            <Input
                              id="editKm"
                              value={editingKm}
                              className="col-span-3"
                              onChange={(ev) => setEditingKm(ev.target.value)}
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="editPrice" className="text-right">
                              Preço:
                            </Label>
                            <Input
                              id="editPrice"
                              value={editingPrice}
                              className="col-span-3"
                              onChange={(ev) =>
                                setEditingPrice(ev.target.value)
                              }
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="editSrc" className="text-right">
                              Link da imagem:
                            </Label>
                            <Input
                              id="editSrc"
                              value={editingSrc}
                              className="col-span-3"
                              onChange={(ev) => setEditingSrc(ev.target.value)}
                            />
                          </div>
                          <div className="flex items-center gap-4">
                            <Label htmlFor="editDestac" className="text-right">
                              Em destaque?
                            </Label>
                            <Input
                              id="editDestac"
                              type="checkbox"
                              className="flex items-center rounded-lg p-3 px-4 text-slate-400 self-start col-span-3 bg-slate-200 w-5"
                              checked={editingOnDestac}
                              onChange={() =>
                                setEditingOnDestac(!editingOnDestac)
                              }
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" onClick={handleEdit}>
                            Atualizar
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Icon
                      icon="material-symbols:delete-outline"
                      className="cursor-pointer text-2xl text-red-500"
                      onClick={() => handleDelete(produto.id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
