package com.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import java.io.File

@RestController
class StaticFileController {

    @GetMapping("/")
    fun getIndex(): String {
        return File("src/main/resources/static/index.html").inputStream().bufferedReader().use { it.readText() }
    }

    @GetMapping("/{path}")
    fun getStaticFile(@PathVariable path: String): String {
        return File("src/main/resources/static/$path").inputStream().bufferedReader().use { it.readText() }
    }
}