import { useState } from "react";
import { useParams } from "react-router";
import { deleteServiceClient } from "../../services/serv.service";
import { FaTrashAlt } from "react-icons/fa";

import {
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import styled from "styled-components";
import ReactSwal from "../../plugins/swal";

const List = ({ clients, update }) => {
  const { id: id_service } = useParams();

  const [modal, setModal] = useState({ isOpen: false, data: null });

  const deleteClient = () => {
    if (modal.data.id) {
      deleteServiceClient(id_service, modal.data.id)
        .then(() => {
          ReactSwal.fire({
            icon: "success",
            title: `Client ${modal?.data?.client_name?.split()[0]} deleted! `,
            showConfirmButton: false,
            showCloseButton: true,
          });
          update(true);
        })
        .catch((error) => console.log("an error happened.."));
    }
  };

  const toggleModal = (data = null) => {
    setModal({
      isOpen: !modal.isOpen,
      data,
    });
  };

  return (
    <div>
      {clients && clients.length ? (
        <div>
          <STable responsive striped size="sm">
            <thead>
              <TableTr>
                <th>Name</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Amount</th>
                <th>Action</th>
              </TableTr>
            </thead>
            <tbody>
              {clients &&
                clients.map((v, i) => (
                  <TableTr key={i}>
                    <td>{v.client_name}</td>
                    <td>{v.client_email}</td>
                    <td>{v.client_address}</td>
                    <td>£ {v.value} </td>
                    <td>
                      <Button
                        size="sm"
                        color="link"
                        className="text-danger"
                        onClick={() => toggleModal(v)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </td>
                  </TableTr>
                ))}
            </tbody>
          </STable>
          <Modal isOpen={modal.isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Delete client</ModalHeader>
            <ModalBody>
              Do you want delete
              <strong> {modal?.data?.client_name?.split()[0]}</strong>?
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={deleteClient}>
                Confirm
              </Button>
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      ) : (
        <div>
          <h3>No client yet...</h3>
        </div>
      )}
    </div>
  );
};

export default List;

const STable = styled(Table)`
  overflow: hidden;
  border-radius: 6px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
`;

const TableTr = styled.tr`
  th {
    background-color: rgb(206, 59, 87, 0.2);
    :nth-child(n) {
      min-width: 200px;
    }
    :nth-child(1) {
      min-width: 250px;
    }
    :nth-child(2) {
      min-width: 300px;
    }
    :nth-child(3) {
      min-width: 200px;
    }
    :nth-child(4) {
      min-width: 100px;
    }
    :nth-child(5) {
      min-width: 10px;
    }
  }
  td {
    :nth-child(1) {
      text-transform: uppercase;
    }
    :nth-child(2) {
      text-transform: lowercase;
    }
    :nth-child(5) {
      text-align: center;
    }
  }
`;
