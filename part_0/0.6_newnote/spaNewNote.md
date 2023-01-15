SPA New Note Sequence Diagram
    browser
    server

    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server ->> browser: note created
    deactivate server