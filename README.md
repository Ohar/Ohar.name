# ohar.name

Единственная страница [ohar.name](https://ohar.name/) — сообщение о переезде на
[Ohar-Studio.ru](https://ohar-studio.ru). Текст и стили находятся в `index.html`.
Зависимости и сборка не нужны: для просмотра достаточно открыть этот файл в браузере.
Автоматического перенаправления на новый домен нет. Старые страницы возвращают 404.

## Деплой

Push в `master` запускает `.github/workflows/deploy.yml`. Деплой также можно
запустить вручную через `workflow_dispatch` в GitHub Actions.

Workflow проверяет файлы деплоя, архивирует только `index.html`, загружает архив
и конфигурацию nginx по SSH, затем вызывает серверный скрипт
`/usr/local/sbin/deploy-ohar-name <commit-sha>`.
Исходник установленного скрипта хранится в `infra/deploy/deploy.sh`.

Скрипт распаковывает страницу в `/var/www/ohar.name/releases/<commit-sha>`,
проверяет конфигурацию через `nginx -t`, атомарно переключает симлинк
`/var/www/ohar.name/current` и перезагружает nginx. После деплоя workflow
сверяет опубликованную страницу с `index.html` и проверяет 404 на старых адресах.

Необходимые GitHub Actions secrets: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`.
SSH-ключ сервера закреплён в workflow. На сервере уже должны быть установлены
скрипт деплоя, nginx и сертификат Let's Encrypt для `ohar.name`.
Маршрут проверки ACME сохранён для продления сертификата.
