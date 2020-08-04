# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups_users
- has_many :groups,through: :groups_users
- has_many :comments

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|comment|text|null: false|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key :true|
|group_id|integer|null: false, foreign_key :true|
|comment|text|null: false|

### Association
- belong_to :user
- belong_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
