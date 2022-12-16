# Generated by Django 4.0 on 2022-10-25 12:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(default='Enter question', max_length=200)),
                ('optionA', models.CharField(default='Option A', max_length=200)),
                ('optionB', models.CharField(default='Option B', max_length=200)),
                ('optionC', models.CharField(default='Option C', max_length=200)),
                ('optionD', models.CharField(default='Option D', max_length=200)),
                ('Answer', models.CharField(default='Answer', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='auth.user')),
            ],
        ),
    ]
