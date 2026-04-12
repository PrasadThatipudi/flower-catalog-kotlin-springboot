package `in`.prasadt.flowercatalogkotlinspringboot

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class FlowerCatalogKotlinSpringbootApplication

fun main(args: Array<String>) {
    runApplication<FlowerCatalogKotlinSpringbootApplication>(*args)
}
