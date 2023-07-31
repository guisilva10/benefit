import Header from '@/components/Header'
import Head from 'next/head'
import React, { useState } from 'react'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import TableBudgets from '@/components/Table'
import SearchInputList from '@/components/SearchInput'

const Clients = () => {
    const router = useRouter();

    const [openMenu, setOpenMenu] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [openFilter, setOpenFilter] = useState(false);
    const [orderValue, setOrderValue] = useState<string>("");
    const [filterValue, setFilterValue] = useState<string>("");
  
    const handleOpenFilter = () => {
      setOpenFilter(!openFilter);
    };
  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    };
  
    const handleOrderValueChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setOrderValue(event.target.value);
    };
  
    const handleFilterValueChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setFilterValue(event.target.value);
    };
  
    console.log(orderValue, filterValue);
  
    const limparLocalStorage = () => {
      const itensParaManter = ['userId', 'ally-supports-cache'];
      const todasAsChaves = Object.keys(localStorage);
      todasAsChaves.forEach(chave => {
        if (!itensParaManter.includes(chave)) {
          localStorage.removeItem(chave);
        }
      });
    };
  return (
    <>
    <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');
        `}</style>
      </Head>
    <Header/>
    <div className={styles.Container}>

        <div className={styles.OrderContainer}>
          <div className={styles.MainContainer}>
            <div className={styles.ListContainer}>
              <div className={styles.ListMenu}>
                <div className={styles.ListMenu}>
                  <div
                    className={styles.ListMenuFilter}
                    onClick={handleOpenFilter}
                  >
                    <img src="./Filter.png"></img>{" "}
                    <span className={styles.ListMenuFilterText}>Filtros</span>
                  </div>
                  <SearchInputList
                    handleSearchChange={(e) => handleSearchChange(e)}
                  ></SearchInputList>
                </div>
              
              </div>
              <div
                className={`${openFilter
                  ? styles.containerFilter
                  : styles.containerFilterClose
                  }`}
              >
                <div className={styles.listFilter}>
                  <h2>ORDENAR POR:</h2>
                  <div className={styles.filterItem}>
                    <input
                      type="radio"
                      id="nomeCrescente"
                      name="ordenarPor"
                      value="nomeCrescente"
                      onChange={handleOrderValueChange}
                      className={styles.filterItem}
                    />
                    <label htmlFor="nomeCrescente">Nome crescente</label>
                  </div>
                  <div className={styles.filterItem}>
                    <input
                      type="radio"
                      id="nomeDecrescente"
                      name="ordenarPor"
                      value="nomeDecrescente"
                      onChange={handleOrderValueChange}
                      className={styles.filterItem}
                    />
                    <label htmlFor="nomeDecrescente">Nome decrescente</label>
                  </div>
                  <div className={styles.filterItem}>
                    <input
                      type="radio"
                      id="maiorValor"
                      name="ordenarPor"
                      value="maiorValor"
                      onChange={handleOrderValueChange}
                      className={styles.filterItem}
                    />
                    <label htmlFor="maiorValor">Maior Valor</label>
                  </div>
                  <div className={styles.filterItem}>
                    <input
                      type="radio"
                      id="dataCadastro"
                      name="ordenarPor"
                      value="dataCadastro"
                      onChange={handleOrderValueChange}
                      className={styles.filterItem}
                    />
                    <label htmlFor="dataCadastro">Data de cadastro</label>
                  </div>
                  <div className={styles.filterItem}>
                    <input
                      type="radio"
                      id="dataVencimento"
                      name="ordenarPor"
                      value="dataVencimento"
                      onChange={handleOrderValueChange}
                      className={styles.filterItem}
                    />
                    <label htmlFor="dataVencimento">Data de vencimento</label>
                  </div>
                  <span className={styles.sublinado}></span>
                  <h2>SITUAÇÃO</h2>
                  <div className={styles.filterItem}>
                    <input
                      type="radio"
                      id="todos"
                      name="situacao"
                      value="todos"
                      onChange={handleFilterValueChange}
                      className={styles.filterItem}
                    />
                    <label htmlFor="todos">Todos</label>
                  </div>
                  <div className={styles.filterItem}>
                    <input
                      type="radio"
                      id="ativos"
                      name="situacao"
                      value="ativos"
                      onChange={handleFilterValueChange}
                      className={styles.filterItem}
                    />
                    <label htmlFor="ativos">Ativos</label>
                  </div>
                  <div className={styles.filterItem}>
                    <input
                      type="radio"
                      id="inativos"
                      name="situacao"
                      value="inativos"
                      onChange={handleFilterValueChange}
                      className={styles.filterItem}
                    />
                    <label htmlFor="inativos">Inativos</label>
                  </div>
                </div>
              </div>
              <div className={styles.MarginTop}></div>
              {/* <GridComponent/> */}
              <TableBudgets
                searchValue={searchValue}
                orderValue={orderValue}
                filterValue={filterValue}
              />
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Clients