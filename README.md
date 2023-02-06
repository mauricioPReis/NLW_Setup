
# Projeto criado no NLW_Setup da Rockeseat
Este projeto tem como objetivo apresentar uma aplicação que possa ser acessada tanto em ambientes web quanto mobile, sendo possível cadastrar hábitos que podem ser acompanhados durante o dia através da tela inicial da aplicação durante em seu dia-dia.

## Tecnologias
- ReactJs <img src="imag/react.svg" width="25" height="25"/>
- React Native <img src="imag/react.svg" width="25" height="25"/>
- Axios <img src="imag/axios-icon.svg" width="25" height="25"/>
- Tailwind CSS <img src="imag/icons8-tailwindcss.svg" width="25" height="25"/>
- Radix UI <img src="imag/radix.svg" width="25" height="25"/>
- SQLite <img src="imag/sqlite-icon.svg" width="25" height="25"/>


## Aplicação

<details>
  <summary>Web</summary>

Tela incial
-----------------
Tela inicial da aplicação, onde é possível realizar a navegação entre as funcionalidades da mesma:
- Verificação de hábitos
- Completar hábitos
- Verificar o progresso e rendimento diário
- Adicionar novos hábitos

![Tela incial](imag/imag_01.png)
### Tela de verificação de hábitos
Nesta tela é possível verificar quais hábitos foram realizados ao decorrer da semana, clicando em um dia específico

![Verificação de hábitos](imag/imag_02.png)
### Tela de cadasto novos hábitos
Nesta parte você pode esta cadastrando novos hábitos e a frequência com que deseja realizar ele durante a semana.

![Tela de cadasto novos hábitos](imag/imag_03.png)
### Validação para cadastro de dados
Este alerta sempre vai aparecer na tela caso você tente cadastrar um novo hábito, porém com um dos campos vazio ou com todos os campos estando vazios.

![Validação para cadastro de dados](imag/imag_04.png)
  
</details>

<details>
  <summary>Mobile</summary>
  
  Tela inical
  -------------
  Assim como na tela inicial da aplicação web essa tela também possibilita fazer a navegação dentre todas as funções que existem na aplicação:
  - Verificação de hábitos
  - Completar hábitos
  - Verificar o progresso e rendimento diário
  - Adicionar novos hábitos
  
  ![Tela de cadasto novos hábitos](imag/03_Inicial.jpg)
  ### Tela de carregamento
  Na aplicação mobile foi feita implementação de uma tela de carregamento antes de carregar para que ela apareça caso tenha algum erro de carregamento com o banco de dados ou algum dos componentes não seja renderizados na tela, e caso exista algum erro na banco de dados será exibido uma mensagem informando a falha na comunicação com o banco de dados
  
  Em carregamento | Sem comunicação com o banco de dados
  :--------------- | :--------------
  ![Tela de cadasto novos hábitos](imag/02_carregamento.jpg) | ![Sem comunicação com o banco de dados](imag/01_Erro_Conexao_banoco.jpg)
  ### Verificação de Habitios
  Assim como versão web você também pode esta fazendo a navegação dentre os seus hábitos passado para ver seu desempenho do dia-dia ou completar os seus hábitos do dia.
  
  Verificando o hábito | Completando hábitos
  :--------------- | :--------------
  ![Verificando o hábito](imag/04_habit_01.jpg) | ![Completando hábitos](imag/04_habit_02.jpg)
  ### Novos hábitos
  Tal como na versão web podemos esta fazendo o cadastro de novos hábitos preenchendo o nome do novo hábito e a recorrência a qual pretendemos praticar esse novo hábito.
  
  Tela de cadastro de novo hábito | Cadastro realizado
  :--------------- | :--------------
  ![Tela de cadastro de novo hábito](imag/05_new_habit.jpg) | ![Cadastro realizado](imag/06_habit_castrado.jpg)
  ### Validação de cadatos de novo Hábitos
  Também foi feita a implementação de uma validação para que caso um dos campos não esteja preenchido o hábito não seja cadastrado.
  
  Validação do nome do hábito | Validação da recorrencia semanal
  :--------------- | :--------------
  ![nome do hábito](imag/07_erro_habit_01.jpg) | ![recorrencia semanal](imag/07_erro_habit_02.jpg)
  ### Lista de hábitos passados
  Podemos esta verificando também a lista de hábitos que já foram completados nos dias anteriores, porém não podemos realizar nem uma atualização nos hábitos de dias passados
  Hábitos passados | 
  :-------------- |
  ![Hábitos passados](imag/08_habit_past.jpg) |
</details>

## Licença
Server | Mobile | Web
:-------- | :-------- | :--------
ISC | ***** | *****

