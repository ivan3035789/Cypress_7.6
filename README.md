# Cypress_7.6

# Домашнее задание к занятию "7.6. Cypress 1"

Любые вопросы по решению задач задавайте в чате учебной группы.

Не забывайте про корректное оформление репозиториев, использование .gitignore, форматирование кода. Без этого работы приниматься на проверку не будут.

---

  ## Задача 1. Cypress - установка и настройка проекта

1. Сделайте себе форк [проекта](https://github.com/netology-code/jsaqa-code/tree/main/booksApp) приложения для работы с книгами с лекции и запустите его локально на своей машине
2. Приложение находится в процессе разработки и многие функциональности еще не готовы, но мы можем тестировать логин и добавление книг
3. Создайте новый проект для тестов на Cypress (в отдельном репозитории)
4. Убедитесь, что вы получили примеры тестов, которые Cypress предоставляет по умолчанию в новом проекте
5. Запустите эти тесты, изучите функции и приемы, которые Cypress показывает на примерах
6. Удалите примеры
7. Создайте спек файл для ваших тестов
8. Добавьте первый тест с проверкой отображения страницы

  ### Добавление тестов

1. Повторите тесты, которые разбирались на лекции
2. Добавьте 3 теста для проверки функциональности работы с книгами в избранном (выберите 3 наиболее важных теста)
3. Вынесите все повторяющиеся шаги в кастомные команды
4. Не забывайте использовать настройки проекта для работы с базовым URL
5. Запустите тесты 


  ## Задача 2. Настройка второй конфигурации

Cypress позволяет иметь несколько конфигураций для запуска. Вам необходимо настроить их для своего проекта.

1. Добавьте вторую конфигурацию, используя [эту документацию](https://docs.cypress.io/guides/guides/environment-variables#Option-2-cypress-env-json)*
2. В конфигурациях настройте параметры `view-port` для двух разных размеров экрана (выберите самый популярный размер экрана на ноутбуках и на мобильных экранах)
3. Проверьте, что вы можете запустить тесты, используя каждую из конфигураций из командной строки 

  ## Задача 3. Настройка скриптов запуска

Для упрощения работы с запуском тестов необходимо настроить 4 скрипта для запуска в режимах headded и headless и разные браузеры для каждой из конфигураций
