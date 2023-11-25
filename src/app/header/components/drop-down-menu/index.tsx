"use client";
import { Dropdown } from "flowbite-react";

export default function DropDownMenu() {
  return (
    <Dropdown
      label=""
      renderTrigger={() => (
        <svg
          className="w-5 h-5 cursor-pointer my-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      )}
    >
      <Dropdown.Item className="text-md">Início</Dropdown.Item>
      <Dropdown.Item className="text-md">Eventos</Dropdown.Item>
      <Dropdown.Item className="text-md">Memória</Dropdown.Item>
      <Dropdown.Item className="text-md">Personalidades</Dropdown.Item>
      <Dropdown.Item className="text-md">Instituições</Dropdown.Item>
      <Dropdown.Item className="text-md">Opinião</Dropdown.Item>
      <Dropdown.Item className="text-md">Cultura</Dropdown.Item>
      <Dropdown.Item className="text-md">Livro</Dropdown.Item>
      <Dropdown.Item className="text-md">Contato</Dropdown.Item>
      <Dropdown.Item className="text-md">Cadastre seu email</Dropdown.Item>
    </Dropdown>
  );
}
