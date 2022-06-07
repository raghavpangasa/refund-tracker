from django.db import models

# Create your models here.


class Order(models.Model):
    order_id = models.CharField(max_length=200, blank=True, null=True)
    name = models.CharField(max_length=40, unique=True)
    source = models.CharField(max_length=25)
    payement_method = models.CharField(max_length=25)
    order_date = models.DateTimeField()
    total_amount = models.DecimalField(decimal_places=2, max_digits=10)

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField(max_length=50, unique=True)
    order = models.ForeignKey(
        Order, related_name="item_order", on_delete=models.CASCADE)
    current_price = models.DecimalField(decimal_places=2, max_digits=10)
    past_prices = models.TextField(max_length=2000)
    status = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Refund(models.Model):
    item = models.ForeignKey(
        Item, related_name="refund_item", on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    refund_date = models.DateTimeField()
    last_updated = models.DateTimeField()
