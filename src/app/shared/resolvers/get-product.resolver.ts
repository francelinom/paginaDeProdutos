import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductsService } from "../services/products.service";
import { inject } from "@angular/core";

export const getProduct = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const productsService = inject(ProductsService);
  return productsService.getId(route.paramMap.get('id') as string);
};
