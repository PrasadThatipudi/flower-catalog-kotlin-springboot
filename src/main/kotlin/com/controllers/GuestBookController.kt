package com.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class GuestBookController {
    @GetMapping("/comments")
    fun getComments() = """
        [
            {
                "id": 1,
                "author": "Anonymous",
                "text": "Hello, world!"
            }
        ]
    """.trimIndent()
}